<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Invitation extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_session_id',
        'uuid',
        'name',
        'pax',
    ];

    protected $appends = ['the_dates'];

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($q) {
            $q->uuid = Str::uuid();
        });
    }

    function event_session()
    {
        return $this->belongsTo(EventSession::class);
    }

    function getTheDatesAttribute()
    {
        $resepsi_sentence = 'resepsi';
        $first_event_sesion = EventSession::first();
        $resepsi_session = EventSession::where('name', 'LIKE', '%' . $resepsi_sentence . '%')->first();
        $main_session = $this->event_session;
        return [
            'akad_session' => [
                'hour_minute' => date("H:i", strtotime($first_event_sesion->begin_at)),
                'day_month_year' => date("Y-m-d", strtotime($first_event_sesion->begin_at)),
            ],
            'main_session' => [
                'begin_at' => [
                    'hour_minute' => date("H:i", strtotime($main_session->begin_at))
                ],
                'end_at' => [
                    'hour_minute' => date("H:i", strtotime($main_session->end_at))
                ]
            ],
            'resepsi_session' => [
                'begin_at' => [
                    'hour_minute' => date("H:i", strtotime($resepsi_session->begin_at))
                ],
                'end_at' => [
                    'hour_minute' => date("H:i", strtotime($resepsi_session->end_at))
                ]
            ]
        ];
    }
}
