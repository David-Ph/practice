<?php 
class Resolve{
    const Pi = 3.142;

    function __call($fname, $arg){

        if($fname == "area")
        switch(count($arg)){
            case 0 : return 0;
            case 1 : return self::Pi * $arg[0];
            case 2 : return $arg[0] * $arg[1];
        }
    }

}
$circle = new Resolve();
echo "Area of circle: ".$circle->area(5)."</br>";
$rect = new Resolve();
echo "Area of rectangle: ".$rect->area(5,10);
?>