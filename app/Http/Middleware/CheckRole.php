<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$role): Response
    {
        // if (!auth()->check() || !in_array(auth()->user()->role, $role)) {
        //     return response()->json([
        //        'message' => 'Unauthorized',
        //     ], Response::HTTP_UNAUTHORIZED);
        // }

        abort_if(!in_array(auth()->user()->role, $role), 403);
        return $next($request);
    }
}
