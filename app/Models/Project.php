<?php

namespace App\Models;

use Spatie\EventSourcing\Projections\Projection;

/**
 * @property string $uuid
 */
class Project extends Projection
{
    protected $guarded = [];
}
