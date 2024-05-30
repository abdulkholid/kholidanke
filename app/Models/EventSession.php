<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventSession extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'begin_at',
        'end_at',
    ];

    function invitations()
    {
        return $this->hasMany(Invitation::class);
    }
}
