
<script>
        function usedata(theme) {
            let newdata = goodsData.filter(value => value.lessgoTheme == theme)
            console.log(newdata)
            for(let i =0; i<goodsData.length; i++){
                let a = "https://github.com/jillina1004/imagebox/blob/main/";
                let b = goodsData[i].lsessgoIndex;
                let e = '' + b;
                let c = ".png?raw=true";
                let indexImage = a+e+c
                let tempBox = ""
                tempBox += `<div class="goodsSlickForm">
                            <div class="goodsSlickUnder"></div>
                            <div class="goodsSlickUpper"><img src="${indexImage}" alt="${b}"></div>
                        </div>`
                $('#goodsSlickIn').append(tempBox)
            }
        }
    </script>