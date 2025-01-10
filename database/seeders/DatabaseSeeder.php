<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        if (!User::where('email', 'admin@contactapp.com')->exists()){
            User::create([
               'name' => 'Admin',
                'email' => 'admin@contactapp.com',
                'role' => 'admin',
                 'password' => bcrypt('password'),
                ]);
                }
        // User::factory()->create([
        //     'name' => 'admin',
        //     'email' => 'admin@contactapp.com',
        // ]);
        if (!User::where('email', 'user@contactapp.com')->exists()){
             User::create([
                'name' => 'User',
                 'email' => 'user@contactapp.com',
                 'role' => 'user',
                  'password' => bcrypt('password'),
                 ]);
                 }
    }
}
