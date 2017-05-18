    /*Hello. This is also on http://codepen.io/Bobsworth/pen/MyzxVd
    * Obviously this would usually be a in a separate js file but I wanted it on the page source so people like you can see it straight in the source :)
    * Thanks for looking.
    * This is all hand coded. I wanted practice and at the same time do something fun. So I wanted a script that will create a fractal, and eventually you can adjust starting circles sizes/positions etc.
    * I created all the maths functions for the complex numbers.


    * REALLY need to make this ES6 now that I've bothered to get back to working on this site
    * Second circles aren't being drawn because of float errors.

    */

    import ComplexMaths from './ComplexMaths.js';


    /*START Canvas Sizing*/
    var canvasSide = window.innerWidth - ((window.innerWidth / 100) * 5);
    var can = document.getElementById('myCanvas');
    can.height = canvasSide;
    can.width = canvasSide;
    var insideCanvas = canvasSide - ((canvasSide / 100) * 5);
    var a = true;
    var v = 1;
    /*END Canvas Sizing*/

    var c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');

    //arrary to keep track of circles made and so circles can be redrawn
    var circles = [];

    //function to draw the circle object. must be called each time
    function draw(circle) {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);  //(x-pos of centre, y-pos of centre, radius, start angle, finish angle)
        ctx.stroke();
    
        //put the name in the circle for debugging
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(circle.name, circle.x, circle.y);

        circles.push(circle);
    }

    //second circles also set for this symmetry. later to make change from size of first,or symmretry chosen//    
    function Circle(name, x, y, r, st, nd, rd) {
        this.name = name;

        //centre co-ord and radius
        this.x = x;
        this.y = y;
        this.r = r;
    
        //the three touching cirlces
        this.st = st; //1st
        this.nd = nd; //2nd
        this.rd = rd; //3rd
    
    
        this.k = (1 / r);
        this.kcom = [(1 / r), 0]; //k as complex number for calcs
        this.z = [x, y]; //centre as co-ord
        this.zk = ComplexMaths.ComplexMul(this.z, this.kcom); //z*k
    }

    //flip the curve, make k opposite sign and recalc zk
    function MakeOutside(a) {
        a.k = (-1) * (1 / a.r);
        a.kcom = [a.k, 0];
        a.zk = ComplexMaths.ComplexMul(a.z, a.kcom);
    }


    //make the first circle. for now - hard coded
    circles.one = new Circle('one', canvasSide / 2, canvasSide / 2, insideCanvas / 2, 'none', 'none', 'none');
    MakeOutside(circles.one); /*set first circle to -ve k because outside circle*/
    draw(circles.one); //draw it!

    //make the second. for now - hard coded
    circles.two = new Circle('two', circles[0].x / 2 + ((circles[0].x - circles[0].r) / 2), circles[0].y, circles[0].r / 2, 'none', 'none', 'none');
    draw(circles.two);

    //make the third. for now - hard coded
    circles.three = new Circle('three', (circles[0].x - circles[0].r) + circles[0].r / 2 + circles[0].r, circles[0].y, circles[0].r / 2, 'none', 'none', 'none');
    draw(circles.three);

    //calc radius of new circle based on the three touching
    function rofnew(a, b, c) {
        return 1 / (a.k + b.k + c.k + (2 * (Math.sqrt((a.k * b.k) + (b.k * c.k) + (c.k * a.k)))));
    }

    //calc z (the centre co-ord) of the new circle
    function zofnew1(a, b, c, d) {
        var onetwo = ComplexMaths.Mul(a.zk, b.zk);
        var twothree = ComplexMaths.Mul(b.zk, c.zk);
        var onethree = ComplexMaths.Mul(a.zk, c.zk);
        var beginning = ComplexMaths.ComplexAdd(ComplexMaths.ComplexAdd(a.zk, b.zk), c.zk);
        var middle = ComplexMaths.ComplexAdd(ComplexMaths.ComplexAdd(onetwo, twothree), onethree);

        return ComplexMaths.ComplexDiv((ComplexMaths.ComplexAdd(beginning, (ComplexMaths.ComplexMul([2, 0], ComplexMaths.ComplexSqrt(middle))))), d.kcom);
    }

    //this is same as zofnew1 except use ComplexSqrt2
    function zofnew2(a, b, c, d) {
        var onetwo = ComplexMaths.ComplexMul(a.zk, b.zk);
        var twothree = ComplexMaths.ComplexMul(b.zk, c.zk);
        var onethree = ComplexMaths.ComplexMul(a.zk, c.zk);
        var beginning = ComplexMaths.ComplexAdd(ComplexMaths.ComplexAdd(a.zk, b.zk), c.zk);
        var middle = ComplexMaths.ComplexAdd(ComplexMaths.ComplexAdd(onetwo, twothree), onethree);
        
        return ComplexMaths.ComplexDiv((ComplexMaths.ComplexAdd(beginning, (ComplexMaths.ComplexMul([2, 0], ComplexMaths.ComplexSqrt2(middle))))), d.kcom);
    }

    //using zofnew1
    function setnew1(a) {
        a.r = rofnew(a.st, a.nd, a.rd);
        a.k = (1 / a.r);
        a.kcom = [a.k, 0];
        a.z = zofnew1(a.st, a.nd, a.rd, a);
        a.x = a.z[0];
        a.y = a.z[1];
        a.zk = ComplexMaths.ComplexMul(a.z, a.kcom);
    }

    //using zofnew2
    function setnew2(a) {
        a.r = rofnew(a.st, a.nd, a.rd);
        a.k = (1 / a.r);
        a.kcom = [a.k, 0];
        a.z = zofnew2(a.st, a.nd, a.rd, a);
        a.x = a.z[0];
        a.y = a.z[1];
        a.zk = ComplexMaths.ComplexMul(a.z, a.kcom);
    }

    /*TODO: get it to iterate through the circles and draw them.
    * I need to rethink the whole thing probably.
    * At the moment each circle must be drawn separately as it needs to be provided with it's touching circles.
    * If I can think how to identify the touching circle (haven't I done it above?) then it can iterate over the circles and draw each
    */

    circles.four = new Circle('four', 1, 1, 1, circles.one, circles.two, circles.three);
    setnew2(circles.four);
    draw(circles.four);

    circles.five = new Circle('five', 1, 1, 1, circles.one, circles.two, circles.three);
    setnew1(circles.five);
    draw(circles.five);

    circles.six = new Circle('six', 1, 1, 1, circles.one, circles.three, circles.five);
    setnew1(circles.six);
    draw(circles.six);

    circles.seven = new Circle('seven', 1, 1, 1, circles.one, circles.two, circles.four);
    setnew1(circles.seven);
    draw(circles.seven);

    circles.eight = new Circle('eight', 1, 1, 1, circles.two, circles.three, circles.five);
    setnew1(circles.eight);
    draw(circles.eight);

    circles.nine = new Circle('nine', 1, 1, 1, circles.eight, circles.two, circles.three);
    setnew1(circles.nine);
    draw(circles.nine);

    circles.ten = new Circle('ten',1,1,1,circles.one, circles.three, circles.six);
    setnew1(circles.ten);
    draw(circles.ten);

    /* started trying to iterate
    circles.push({
    name: "iterationnum",
    st: circles[0],
    nd: circles[1],
    rd: circles[4],
    x: 1,
    y: 1,
    r: 1,
    k: (1 / 1),
    kcom: [(1 / 1), 0],
    z: [1, 1]
        //maybestillneedthis zk = ComplexMul([z,kcom);
    })*/

    (function loopTest() {
        var table, i;
        table = document.getElementById('table');


        //loop
        for (i = 0; i < 11; i++){
            (function addNumber() {
                var line = document.createElement('p');
                var text = document.createTextNode(i);
                line.appendChild(text);
                table.appendChild(line);
            })();
        }

        


    })();

    document.getElementById('length').innerHTML = circles.length;