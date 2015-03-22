cities[0]='_shanghai'
cities[1]='_beijing'
cities[2]='_hangzhou'
cities[3]='_guangzhou'
cities[4]='_nanjing'
cities[5]='_suzhou'
cities[6]='_shenzheng'
cities[7]='_chengdu'
cities[8]='_chongqing'
cities[9]='_tianjing'

dateFolder=`date +%F`
mkdir $dateFolder

for i in $(seq 0 9)
do
    touch ./$dateFolder/$i${cities[$i]}
done
