<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ActorController extends Controller {
    static function getActors() {
        return [
            [
                "name" => "Robert Downey Jr",
                "photo" => "https://upload.wikimedia.org/wikipedia/commons/a/a2/Robert_Downey%2C_Jr._SDCC_2014_%28cropped%29.jpg",
            ],
            [
                "name" => "Chris Evans",
                "photo" => "https://asset.kompas.com/crops/KB8oO-cM8mHMs5o-KTEDAR58zMw=/110x18:927x563/750x500/data/photo/2020/10/08/5f7ebed5eeca8.jpg"
            ],
            [
                "name" => "Chris Hemsworth",
                "photo" => "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chris_Hemsworth_by_Gage_Skidmore.jpg/1200px-Chris_Hemsworth_by_Gage_Skidmore.jpg"
            ],
            [
                "name" => "Tom Holland",
                "photo" => "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/800px-Tom_Holland_by_Gage_Skidmore.jpg"
            ],
            [
                "name" => "Artour Babaev",
                "photo" => "https://liquipedia.net/commons/images/d/d9/Arteezy_The_International_10.jpg"
            ],
            [
                "name" => "Tal Aizik",
                "photo" => "https://oneesports.blob.core.windows.net/cdn-data/wp-content/uploads/2019/11/EvilGeniuses_Fly-1024x699.jpg"
            ],
            [
                "name" => "Xu Linsen",
                "photo" => "https://liquipedia.net/commons/images/thumb/f/f6/Fy_ems_finals.jpg/250px-Fy_ems_finals.jpg"
            ],
            [
                "name" => "Abed Yusopp",
                "photo" => "https://liquipedia.net/commons/images/thumb/6/6f/Abed_DreamLeague_S13.jpg/250px-Abed_DreamLeague_S13.jpg"
            ],
            [
                "name" => "Sebastian Ceb",
                "photo" => "https://www.ligagame.tv/templates/yootheme/cache/og-Ceb-dota-2_8f776-2b3b434e.jpeg"
            ],
            [
                "name" => "Xu Zhilei",
                "photo" => "https://yt3.ggpht.com/ytc/AKedOLSD6CX1_meJl81wmBXt1067dNoF1yACvCPB7CWR=s900-c-k-c0x00ffffff-no-rj"
            ]
        ];
    }
}
