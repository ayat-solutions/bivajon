<?php

namespace Tests\Feature;

use App\Models\User;
use Database\Factories\UserFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProjectActionTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    public function test_authorized_user_can_create_project()
    {
        $attr = [
            'title'       => 'Project-01',
            'description' => $this->faker->sentence,
        ];

        $user = User::factory()->create();

        $this->actingAs($user)
            ->post('/projects', $attr)
            ->assertRedirect(route('projects.index'));

        $this->assertDatabaseHas('projects', $attr);
    }
}
