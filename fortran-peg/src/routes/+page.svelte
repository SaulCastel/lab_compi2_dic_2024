<script lang="ts">
    import parseInput from "$lib/parser";
    import CodeMirror from "svelte-codemirror-editor"

    let editorText = $state("");
    let result = $state("");
    
    function parse() {
        result = parseInput(editorText);
    }
</script>

<div class="p-5 flex flex-row h-full max-h-full">
    <div class="h-full w-1/2 mx-2 rounded-md border-black border overflow-y-scroll">
        <CodeMirror bind:value={editorText} on:change={parse}/>
    </div>
    <div class="rounded-md border-black border-2 h-full w-1/2 mx-2">
        <pre class="text-red-500">
            {result}
        </pre>
    </div>
</div>