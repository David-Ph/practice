<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller {
    static function getCategories() {
        return [
            "Comedy", "Action", "Horror", "Mystery", "Drama", "Thriller", "Isekai", "Fantasy"
        ];
    }

    static function getPosterImages(){
        return [
            "https://www.themoviedb.org/t/p/w440_and_h660_face/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg",
            "https://www.themoviedb.org/t/p/w440_and_h660_face/tK5xU4x7w9npLUYT5xZJ4RvVlsM.jpg",
            "https://www.themoviedb.org/t/p/w440_and_h660_face/1SyTnaY0wte69oKdqxQLvxPT3hs.jpg",
            "https://www.themoviedb.org/t/p/w440_and_h660_face/yACIAqAkSLkX4coHafpyLWAtQjw.jpg",
            "https://www.themoviedb.org/t/p/w440_and_h660_face/h25kBoE6YGMIF09R9FFDFPcvQoH.jpg",
            "https://www.themoviedb.org/t/p/w440_and_h660_face/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg",
            "https://www.themoviedb.org/t/p/w440_and_h660_face/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
            "https://www.themoviedb.org/t/p/w440_and_h660_face/jj8XxkbSMjFH5Kjdvaq1ZYEAY8K.jpg",
            "https://www.themoviedb.org/t/p/w440_and_h660_face/iPTZGFmPs7HsXHYxiuxGolihjOH.jpg",
            "https://www.themoviedb.org/t/p/w440_and_h660_face/gII53HAH7UA1yx189vROMzWA5ib.jpg",
            "https://www.themoviedb.org/t/p/w440_and_h660_face/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
            "https://www.themoviedb.org/t/p/w440_and_h660_face/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
            "https://www.themoviedb.org/t/p/w440_and_h660_face/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg"
        ];
    }
}
