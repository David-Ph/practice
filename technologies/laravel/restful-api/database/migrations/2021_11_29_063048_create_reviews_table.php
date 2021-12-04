<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId("user_id")
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->foreignId("movie_id")
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->unique(['user_id', 'movie_id']);
            $table->text("content");
            $table->integer("rating")->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('reviews');
    }
}
