//category[]
//tasks[]
//task {cate: string, task_text: string, state: string}

document.getElementById("btn_cate").addEventListener("click",function(event){
    event.preventDefault();
    const inputNode_cate = document.getElementById("input_new_cate");
    const inputCate_text = inputNode_cate.value.trim();
    // alert(inputCate_text);
    if (inputCate_text==="")
        return;
    for (let pre_cate of document.getElementsByTagName("h3"))
    {
        if (pre_cate.textContent === inputCate_text)
        {
            alert("This Category has already been in the list");
            return;
        }
    }
    add_new_category(inputCate_text);
})

document.getElementById("btn_add").addEventListener("click",function(event){
    event.preventDefault();
    const input_cate_Node = document.getElementById("input_cate");
    const cate_text = input_cate_Node.value.trim();
    const input_task_Node = document.getElementById("input_task");
    const task_text = input_task_Node.value.trim();
    if (cate_text===""||task_text==="")
    {
        alert("Please enter all the needed fields");
        return;
    }
    add_new_task(cate_text, task_text,"Progress");
})

document.getElementById("btn_save").addEventListener("click",function(event){
    event.preventDefault();
    const category=[];
    for (let cate of document.getElementsByTagName("h3"))
    {
        category.push(cate.textContent.trim());
    }
    localStorage.setItem("category",category);

    const tasks=[];
    for (let t of document.getElementsByTagName("li"))
    {
        const task = {
            cate: t.className,
            task_text: t.childNodes[0].textContent,
            state: t.childNodes[1].textContent
        }
        tasks.push(task);
    }
    localStorage.setItem("tasks",JSON.stringify(tasks));
})

const category = localStorage.getItem("category")
if (category)
{
    //alert(category);
    const spl_line = category.split(",");
    for (let cate of spl_line)
    {
        add_new_category(cate);
    }
}

const tasks = JSON.parse(localStorage.getItem("tasks"))
if (tasks)
{
    for (let task of tasks)
    {
        add_new_task(task.cate, task.task_text,task.state);
    }
}

function add_new_task(cate, task, state)
{
    const cate_ul = document.getElementById("cate_bd_"+cate);
    if (!cate_ul)
    {
        alert("Category not found");
        return;
    }
    const new_li = document.createElement("li");
    new_li.className = cate;
    const p1 = document.createElement("p");
    p1.textContent = task;
    p1.className = "p_task_name";
    const p2 = document.createElement("p");
    p2.textContent = state;
    p2.className = "p_task_state";
    p2.addEventListener("click",function(event){
        if (p2.textContent === "Progress")
            p2.textContent = "Done";
        else if (p2.textContent === "Done")
            p2.textContent = "Pending";
        else
            p2.textContent = "Progress";
    })
    const btn = document.createElement("button");
    btn.addEventListener("click", function(event){
        cate_ul.removeChild(new_li);
    })
    btn.textContent = "Remove";
    new_li.appendChild(p1);
    new_li.appendChild(p2);
    new_li.appendChild(btn);
    cate_ul.appendChild(new_li);
}

function add_new_category(name)
{
    const div_rest = document.getElementById("div_the_rest");
    const cate_h = document.createElement("h3");
    cate_h.textContent=name;
    const cate_bd = document.createElement("ul");
    const cate_bd_name = "cate_bd_"+name;
    cate_bd.id=cate_bd_name;
    div_rest.appendChild(cate_h);
    div_rest.appendChild(cate_bd);
}