<?php 
    echo "sudo /opt/lampp/manager-linux-x64.run";
    echo "Hello world!";

    $a = 10;
    $b = 15;

    $c = $a + $b;

    echo "This is concatenation" . $a . "Yes";

    if($a > $b){
        echo "a is more than b";
    }elseif($a < $b){
        echo "b is less than b";
    }else{
        echo "a is equal to b";
    }

    $index_array = ['a', 'b', 'c', 1234];

        for ($i = 0; $i < 15; $i++) { 
        echo "<br>";
        echo $i;
    }

    for($c = 10; $c < 25; $c++){
        echo $c;
    }

    $a = 0;
    while($a < 10){
        echo "while loop";
        echo $a;
        $a++;
    }
?>