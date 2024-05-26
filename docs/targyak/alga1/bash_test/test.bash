correct_count=0
n=3
ans=$(python weird_algorithm.py <<< $n)
ansgood="3 10 5 16 8 4 2 1"
if [ "$ans" != "$ansgood" ]; then 
    echo "\x1b[31mWrong answer n=$n\x1b[30m"
    break
else
    ((correct_count++))
fi

for i in {1..9} 
do
    n=$(python weird_algorithm.generatetests.py)
    : ' 
    Egyszerűbben is megadhatunk egy random számot.
    n= $(( ( RANDOM % 100000 )  + 1 ))
    '
    ans=$(python weird_algorithm.py <<< $n)
    ansgood=$(python weird_algorithm_good.py <<< $n)
    if [ "$ans" != "$ansgood" ]; then 
        echo "\x1b[31mWrong answer n=$n\x1b[30m"
        break
    else
        ((correct_count++))
    fi
done
if [ $correct_count -eq 10 ]; then
    echo "\x1b[32mAll tests passed\x1b[30m"
    echo "0"
    else
    echo "1"
fi
