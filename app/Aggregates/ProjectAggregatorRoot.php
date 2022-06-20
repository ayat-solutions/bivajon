<?php

namespace App\Aggregates;

use App\DataTransferObjects\ProjectDTO;
use App\Models\Project;
use App\StorableEvents\ProjectCreated;
use App\StorableEvents\ProjectDeleted;
use App\StorableEvents\ProjectUpdated;
use Spatie\EventSourcing\AggregateRoots\AggregateRoot;

class ProjectAggregatorRoot extends AggregateRoot
{
    public function create(ProjectDTO $projectDTO): static
    {
        $this->recordThat(new ProjectCreated(
            $projectDTO->title,
            $projectDTO->description
        ));

        return $this;
    }

    public function update(ProjectDTO $projectDTO): self
    {
        $this->recordThat(new ProjectUpdated(
            $projectDTO->title,
            $projectDTO->description
        ));

        return $this;
    }

    public function delete(Project $project)
    {
        $this->recordThat(new ProjectDeleted(
            $project->uuid
        ));

        return $this;
    }
}
