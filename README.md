#dinject.js
=======
#####Dependency injection in javascript.
=======
>dinject is a light weight javascript dependency injection framework that allows javascript developers can removing hard-coded dependencies and making it possible to change them, whether at run-time or compile-time.

####Like the Spring framework in java,you can use DI in javascript with a simple config as follows
<pre><code>
var di_config = {
    beans: [
    {
		    name: 'Speak',
		    from: 'humanBehavior'
		}
		,{	
		    name: 'Walk'
		}
		,{
		    name: 'Person',
		    inject: [{
		        need: 'Speak',
		        prop: 'speak'
		    }, {
		        need: 'Walk',
		        prop: 'walk'
		    }]
		}],
    libs:[
    	{
    		name:'humanBehavior',
    		path:'human.js'
    	}
    ]
}
</code></pre>

Then you can use it like this:
<pre><code>
di.create(People);
</code></pre>

dinject will fill the speak and walk property with new instance or the instance from pool then return a Person instance to you.
<br/>
Also dinject provide a simple way to load js at runtime.
<pre>
<code>
using('humanBehavior',function(){
  //do something when the js file loaded.
});
</code>
</pre>
#Document
###Get Started

Insert the script in any place but below the dinject_config in the html page.
<code>\<script type="text/javascript" src="dinject.js"\>\</script\></code><br/>
And then setup the dinject_config for dependency injection maping and libs settings as follow:
<pre><code>
var di_config = {
    beans: [
    {
		    name: 'Speak',
		    from: 'humanBehavior'
		}
		,{	
		    name: 'Walk'
		}
		,{
		    name: 'Person',
		    inject: [{
		        need: 'Speak',
		        prop: 'speak'
		    }, {
		        need: 'Walk',
		        prop: 'walk'
		    }]
		}],
    libs:[
    	{
    		name:'humanBehavior',
    		path:'human.js'
    	}
    ]
}
</code></pre>
That's it ,now you can use the following api:

***di.create(class or className)***
<br/>
To get an class instance,it could be from the pool or just a new one.and the dependency injection in this instance is just follow your config.


***di.using(libName,callback)***
<br/>
To get a script at runtime , the script is config in the dinject config libs.the callback will call when the script loaded.

***di.clean()***
<br/>
To manually clean the instances pool.

***di.update(config)***
<br/>
To reset the configuration of beans and libs.

