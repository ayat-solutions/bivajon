<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\EventSourcing\Projections\Projection;

/**
 * @property string $uuid
 */
class Project extends Projection
{
    use SoftDeletes;

    protected $guarded = [];
}
