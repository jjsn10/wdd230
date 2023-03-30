//getting all images with data-src 
const imagesToLoad = document.querySelectorAll("img[data-src]");
//console.log(imagesToLoad);

const imgOptions = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 1
};

const loadImages = (image) =>{
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () =>{
        image.removeAttribute("data-src");
    };
};

if ('IntersectionObserver' in window){
    const observer = new IntersectionObserver((items, observer)=>{
        items.forEach((item)=>{
            if (item.isIntersecting){
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);
    
    imagesToLoad.forEach((img) =>{
        observer.observe(img);
    });
}else{
    imagesToLoad.forEach((img)=>{
        loadImages(img);
    });

}