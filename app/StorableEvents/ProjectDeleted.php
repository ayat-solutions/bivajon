<?php

namespace App\StorableEvents;

use Spatie\EventSourcing\StoredEvents\ShouldBeStored;

class ProjectDeleted extends ShouldBeStored
{
    public function __construct(public string $uuid)
    {
    }
}
