<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Hero extends Model
{
    use HasFactory;

    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'greeting',
        'full_name',
        'position',
        'image',
        'file',
    ];

    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($image) => asset('/assets/images/' . $image),
        );
    }

    protected function file(): Attribute
    {
        return Attribute::make(
            get: fn ($file) => asset('/assets/files/' . $file),
        );
    }
}
