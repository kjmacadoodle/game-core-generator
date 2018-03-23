var list = document.getElementById("corelist"),
button = document.getElementById("shuffle");



function shuffle(items)
{
    var cached = items.slice(0), temp, i = cached.length, rand;
    while(--i)
    {
        rand = Math.floor(i * Math.random());
        temp = cached[rand];
        cached[rand] = cached[i];
        cached[i] = temp;
    }
    return cached;
}
shuffleNodes();
function shuffleNodes()
{
    var nodes = list.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
	
	$("ul#corelist > li").css("display","none");
	
	
    while(i < nodes.length)
    {
        list.appendChild(nodes[i]);
        ++i;
    }
	//randomly assign 2 or 3 cores
	var rand = Math.random();
	if (rand<=.5) {
		$("ul#corelist > li").slice(0,3).css("display","block");
		$("ul#corelist > li").slice(0,3).css("font-weight","bold");
	} else {
		$("ul#corelist > li").slice(0,2).css("display","block");
		$("ul#corelist > li").slice(0,2).css("font-weight","bold");		
	}
}
button.onclick = shuffleNodes;