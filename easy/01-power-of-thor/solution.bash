read lightX lightY thorX thorY

N="N"
S="S"
W="W"
E="E"

while true; do

    read remainingTurns

    action=""

    if [ $thorY -gt $lightY ] ; then
        thorY=$((thorY - 1))
        action=$action$N
    fi

    if [ $thorY -lt $lightY ] ; then
        thorY=$((thorY + 1))
        action=$action$S
    fi

    if [ $thorX -gt $lightX ] ; then
        thorX=$((thorX - 1))
        action=$action$W
    fi

    if [ $thorX -lt $lightX ] ; then
        thorX=$((thorX + 1))
        action=$action$E
    fi

    echo $action
done
