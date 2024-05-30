<?php

namespace App\Http\Controllers;

use App\Models\Option;

abstract class Controller
{
    static function __get_options($names)
    {
        $option = Option::where('name', $names[0]);
        foreach ($names as $key => $name) {
            if ($key > 0) {
                $option = $option->orWhere('name', $name);
            }
        }
        $option = $option->get();
        return $option->mapWithKeys(function ($result) {
            return [$result['name'] => json_decode($result['value'], true)];
        });
    }
}
