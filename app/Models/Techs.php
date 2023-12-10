<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Techs extends Model
{
    use HasFactory;

    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'icon',
    ];

    // protected function icon(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn ($icon) => "ReactIcons['".$icon."']",
    //     );
    // }
}
