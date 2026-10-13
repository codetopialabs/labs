export type Post = {
  slug: string
  title: string
  date: string
  body: string[]
}

export const posts: Post[] = [
  {
    slug: 'sliding-between-pages',
    title: 'Sliding between pages',
    date: '2026-10-13',
    body: [
      'When you move between pages on this site, the content slides out to the left and the next page slides in from the right. The header and footer stay where they are. This uses the browser\'s View Transitions API and a few lines of CSS. There is no animation library.',
      'The router does most of the work. Links on the site are React Router links with the viewTransition option set. When one is clicked, the router calls document.startViewTransition and renders the next page inside it.',
      'The browser takes a snapshot of the page before and after the change. Any element with a view-transition-name gets its own pair of snapshots that can be animated on their own. The main content area is named page, and the header and footer have names too, so only the content moves.',
      'The slide is two keyframes. The old snapshot moves left by the width of the screen, and the new one starts the same distance to the right and moves into place. Both take 0.45 seconds. We also turned off the default cross-fade on the rest of the page so nothing else flickers.',
      'Browsers without view transitions switch pages instantly. The same happens if your system is set to reduce motion.',
      'To check it, we drove Chrome through its debugging protocol, clicked a link, and listed the animations that were running. The content ran the slide out and slide in, and the header and footer stayed still.',
    ],
  },
  {
    slug: 'the-maze',
    title: 'How the home page maze works',
    date: '2026-10-13',
    body: [
      'The square on the home page draws a random maze, solves it, and starts over every few seconds.',
      'The maze has 7 by 7 cells. With the walls between them that makes a 15 by 15 grid, drawn on a canvas at 4 pixels per block.',
      "To generate it we use a depth-first backtracker. Start at the top-left cell, move to a random neighbour you haven't visited, and remove the wall between the two. If there is nowhere new to go, step back until there is. Every cell is visited exactly once, so there are no loops and only one route between any two cells.",
      'To solve it we run a breadth-first search from the top-left corner. It checks every block one step away, then two steps away, and so on. The grey area that spreads through the maze is the search. It stops when it reaches the bottom-right corner, and because it searched in order of distance, the path it found is the shortest one.',
      'To draw the path, each block remembers which block it was reached from. Following those links back from the goal gives the route, which is drawn in black.',
      'All of this is worked out before anything is drawn. Then one block is painted per frame using requestAnimationFrame. If your system is set to reduce motion, you get a finished maze with no animation.',
    ],
  },
]
