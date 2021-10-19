$(function(){

    // Product dropdown
    
    $(".product__dropdown").click(()=>{
        $(".products-dropdown").toggleClass("dropdown-active");
        let solution = $(".solution-dropdown")
        if(solution.hasClass("dropdown-active")){
            solution.removeClass("dropdown-active")
        }

        $(".product__dropdown").toggleClass("menu__link-active");
        let solution__link = $(".solution__dropdown")
        if(solution__link.hasClass("menu__link-active")){
            solution__link.removeClass("menu__link-active")
        }
    });

    // Solution dropdown
    $(".solution__dropdown").click(()=>{
        $(".solution-dropdown").toggleClass("dropdown-active");
        let product = $(".products-dropdown")
        if(product.hasClass("dropdown-active")){
            product.removeClass("dropdown-active")
        }

        $(".solution__dropdown").toggleClass("menu__link-active");
        let product__link = $(".product__dropdown")
        if(product__link.hasClass("menu__link-active")){
            product__link.removeClass("menu__link-active")
        }
    });
})