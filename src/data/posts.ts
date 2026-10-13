export type Post = {
  slug: string
  title: string
  date: string
  body: string[]
}

export const posts: Post[] = [
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
