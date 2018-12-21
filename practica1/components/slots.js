Vue.component('slots', {
  template: `
    <div>
      <h2> Slots, ejemplo de layout </h2>
      <div>
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <slot></sloy>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  `
});
