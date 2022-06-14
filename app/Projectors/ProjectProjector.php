<?php

namespace App\Projectors;

use App\Models\Project;
use App\StorableEvents\ProjectCreated;
use Spatie\EventSourcing\EventHandlers\Projectors\Projector;

class ProjectProjector extends Projector
{
    public function onCreateProject(ProjectCreated $event)
    {
        $project = (new Project())
            ->writeable()
            ->create([
                'uuid'        => $event->aggregateRootUuid(),
                'title'       => $event->title,
                'description' => $event->description,
            ]);
    }
}
