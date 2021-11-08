<?php 
class ContohStatic{
    public static $angka = 24;

    public static function halo(){
        return "Halo dunia " . self::$angka++;
    }
}

echo ContohStatic::$angka;
echo "<br>";
echo ContohStatic::halo();
echo "<br>";

?>