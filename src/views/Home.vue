<template>
  <div>
    <div></div>
    <div class="nav">
      <input id="term" /> <button>Search Topic</button>
      <button type="button" class="collapsible">menu</button>
      <ul class="menu">
        <li>Home</li>
        <li>MySaves</li>
        <li>MakePost</li>
        <li>LogOut</li>
      </ul>
    </div>
    Home

    <article v-for="article in articles" :key="article.id">
      <RouterLink :to="{ name: 'article', params: { articleId: article.id } }">
        <div class="artical">
          <table>
            <tr>
              <td class="title">{{ article.title }}</td>
              <td class="notes">
                post id: {{ article.id }}
                <br />
                date: {{ article.created }}
              </td>
            </tr>
            <tr>
              <td class="post" colspan="2">
                {{ article.format }}
              </td>
            </tr>
          </table>
        </div>
      </RouterLink>
    </article>
  </div>
</template>

<script>
export default {
  data: () => ({
    articles: Array(10)
      .fill()
      .map((nil, index) => ({
        id: index + 1,
        title: `title ${index}`,
        format: "text",
        votes: 3,
        created: Date.now()
      }))
  })
};
</script>

<style scoped>
.artical {
  display: block;
  width: 400px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5px;
  padding: 5px;
  background: lightgray;
}
.title {
  width: 80%;
  text-align: left;
  font-size: 14pt;
  color: darkslategrey;
}
.notes {
  width: auto;
  text-align: right;
  font-size: 6pt;
}
.post {
  column-span: all;
  padding: 5px 0px;
}
button {
  border: solid lightblue;
  padding: 2px;
}
input {
  background: lightyellow;
  outline: solid lightgray;
  padding: 2px;
}

.collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: center;
  outline: none;
  font-size: 15px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active,
.collapsible:hover {
  background-color: #ccc;
}

/* Style the collapsible content. Note: hidden by default */
.menu {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}
</style>
