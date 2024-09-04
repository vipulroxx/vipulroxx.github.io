#!/bin/bash  
  
# Read the .gitmodules file and extract submodule paths  
submodules=($(grep "path =" .gitmodules | awk '{print $3}'))  
  
# Loop through each submodule  
for submodule in "${submodules[@]}"  
do  
    # Check if node_modules folder is not present  
    if [ ! -d "$submodule/node_modules" ]; then  
        echo "node_modules folder is not present in $submodule"  
    fi  
done  

