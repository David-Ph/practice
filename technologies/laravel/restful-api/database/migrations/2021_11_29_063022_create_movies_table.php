<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMoviesTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->integer('rating')->nullable()->default(0);
            $table->text("description")->nullable();
            $table->json("categories")->nullable();
            $table->json("actors")->nullable();
            $table->string("trailer")->nullable();
            $table->string("posterImage")->nullable()->default("https://i.imgur.com/hXgKBGQ.jpg");
            $table->date("releaseDate")->default("1970-01-01");
            $table->string("director")->nullable();
            $table->integer("budget")->nullable();
            $table->string("featuredSong")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('movies');
    }
}
