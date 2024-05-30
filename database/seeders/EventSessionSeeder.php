<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\EventSession;

class EventSessionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = array(
            [
                'name' => 'Akad',
                'begin_at' => '2024-06-22 12:30:00',
                'end_at' => '2024-06-22 14:30:00',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Resepsi 1',
                'begin_at' => '2024-06-22 15:30:00',
                'end_at' => '2024-06-22 16:30:00',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Resepsi 2',
                'begin_at' => '2024-06-22 16:30:00',
                'end_at' => '2024-06-22 17:30:00',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        );
        EventSession::insert($data);
    }
}
