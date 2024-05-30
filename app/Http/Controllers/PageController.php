<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use App\Models\Option;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class PageController extends Controller
{
    function index()
    {
        $data['page_title'] = 'Hai semuanya <3';
        return Inertia::render('Greeting', $data);
    }

    function invitation($uuid)
    {
        $invitation = Invitation::where('uuid', $uuid)->firstOrFail();
        $data['page_title'] = 'Undangan Untuk "' . $invitation->name . '"';
        $data['invitation'] = $invitation;
        $data['options'] = self::__get_options(['logo', 'bride', 'groom', 'venue']);
        return Inertia::render('Home', $data);
    }

    function cover($uuid)
    {
        $invitation = Invitation::where('uuid', $uuid)->firstOrFail();
        $data['page_title'] = 'Undangan Untuk "' . $invitation->name . '"';
        $data['invitation'] = $invitation;
        $data['options'] = self::__get_options(['logo']);
        return Inertia::render('Cover', $data);
    }

    function bridegroom($uuid)
    {
        $data['page_title'] = 'Calon Pengantin';
        $data['invitation'] = Invitation::where('uuid', $uuid)->firstOrFail();
        $data['options'] = self::__get_options(['bride', 'groom']);
        return Inertia::render('Bridegroom', $data);
    }

    function save_the_date($uuid)
    {
        $data['page_title'] = 'Detail Acara';
        $data['invitation'] = Invitation::where('uuid', $uuid)->firstOrFail();
        $data['options'] = self::__get_options(['venue']);
        return Inertia::render('SaveTheDate', $data);
    }

    function thank_you($uuid)
    {
        $data['page_title'] = 'Terima kasih, jangan lupa hadir yaaa.. :)';
        $data['invitation'] = Invitation::where('uuid', $uuid)->firstOrFail();
        $data['options'] = self::__get_options(['logo', 'bride', 'groom']);
        return Inertia::render('ThankYou', $data);
    }

    function toggle_song()
    {
        $play_song = Session::get('play_song');
        Session::put('play_song', !$play_song);
    }
}
