<?php

namespace App\StorableEvents;

use Spatie\EventSourcing\StoredEvents\ShouldBeStored;

class ProjectCreated extends ShouldBeStored
{
    public function __construct(public string $title, public string $description)
    {
    }
}
