<?php

namespace App\Projectors;

use App\Models\Project;
use App\StorableEvents\ProjectCreated;
use App\StorableEvents\ProjectUpdated;
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

    public function onUpdateProject(ProjectUpdated $event)
    {
        Project::find($event->aggregateRootUuid())
            ->writeable()
            ->update([
                'title'       => $event->title,
                'description' => $event->description,
            ]);
    }
}
