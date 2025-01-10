<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    use AuthorizesRequests;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Fetch only the contacts belonging to the authenticated user
        $contacts = auth()->user()->contacts()->latest()->get();

        return Inertia::render('Contact/List', [
            'contacts' => $contacts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Contact/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request input
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:contacts,email',
            'phone' => 'nullable|string|max:15',
            'category' => 'required|string|max:255',
        ]);

        auth()->user()->contacts()->create($validated);

        return redirect()->route('contact.index')->with('success', 'Contact created successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        // Authorize that the contact belongs to the authenticated user
        $this->authorize('update', $contact);

        return Inertia::render('Contact/Edit', [
            'contact' => $contact,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        // Authorize that the contact belongs to the authenticated user
        $this->authorize('update', $contact);

        // Validate the request input
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:contacts,email,' . $contact->id,
            'phone' => 'nullable|string|max:15',
            'category' => 'required|string|max:255',
        ]);

        // Update the contact
        $contact->update($validated);

        return redirect()->route('contact.index')->with('success', 'Contact updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        // Authorize that the contact belongs to the authenticated user
        $this->authorize('delete', $contact);

        // Delete the contact
        $contact->delete();

        return redirect()->route('contact.index')->with('success', 'Contact deleted successfully.');
    }
}
