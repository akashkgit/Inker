arr=$(ls)
#echo $arr[@]
for file in "$arr[@]"
do
if [[ $file != $1 ]]
then
rm -rf $file
fi
done
