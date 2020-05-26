import React, { useState } from 'react';
import './board.component.scss';
import TileContainer from '../tile/tile.container';

const MINE = -1;
const REGULAR = 0;

function Board(props: { colsNum: number; rowsNum: number; mineCount: number }) {
  console.clear();
  // You're calling createBoard on _every_ render.
  // Look at https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  let [board, setBoard]: [Array<number>, any] = useState(
    createBoard(props.colsNum, props.rowsNum, props.mineCount)
  );

  // As discussed - don't put that in the render, use useEffect
  let rows = [];
  for (let row = 0; row < props.rowsNum; row++) {
    const rowItems = [];
    for (let cell = 0; cell < props.colsNum; cell++) {
      const boardItem =
        board[twoDimentionalIndexToOne(row, cell, props.colsNum)];

      if (boardItem === MINE) {
        rowItems.push(<TileContainer type="Bomb"></TileContainer>);
      } else {
        rowItems.push(
          <TileContainer type="Number" bombsCount={boardItem}></TileContainer>
        );
      }
    }
    rows.push(<div className="row">{rowItems}</div>);
  }

  return <div className="board">{rows}</div>;
}

// I'd take all the functions below to a different file - boardUtils or something
function createBoard(
  colsNum: number,
  rowsNum: number,
  minesCount: number
): number[] {
  let oneDimentionalBoard = new Array(rowsNum * colsNum).fill(REGULAR);
  let referenceIndexBoard = new Array(rowsNum * colsNum)
    .fill(6)
    .map((_, i) => i);

  let mineIndices = [];

  for (let i = minesCount; i > 0; i--) {
    // I think Math.floor might return 1 - watch out
    const index = Math.floor(Math.random() * referenceIndexBoard.length);

    mineIndices.push(referenceIndexBoard[index]);
    oneDimentionalBoard[referenceIndexBoard[index]] = MINE;
    referenceIndexBoard[index] =
      referenceIndexBoard[referenceIndexBoard.length - 1];

    referenceIndexBoard.pop();
  }

  return calcNumbers(mineIndices, oneDimentionalBoard, colsNum, rowsNum);
}

function calcNumbers(
  mineIndices: number[],
  board: number[],
  colsCount: number,
  rowsCount: number
): number[] {
  mineIndices.forEach((mine) => {
    const neighbours = findNeighbours(mine, colsCount, rowsCount);
    neighbours.forEach((neighbour) => {
      if (board[neighbour] >= 0) {
        board[neighbour]++;
      }
    });
  });

  return board;
}

function oneDimentionalIndexToTwo(
  index: number,
  colsCount: number
): [number, number] {
  return [Math.floor(index / colsCount), index % colsCount];
}

function twoDimentionalIndexToOne(
  x: number,
  y: number,
  colsCount: number
): number {
  return x * colsCount + y;
}

function findNeighbours(index: number, colsCount: number, rowsCount: number) {
  const [i, j] = oneDimentionalIndexToTwo(index, colsCount);

  let neighbours = [];

  for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, rowsCount - 1); x++) {
    for (let y = Math.max(0, j - 1); y <= Math.min(j + 1, colsCount - 1); y++) {
      if (x !== i || y !== j) {
        neighbours.push(twoDimentionalIndexToOne(x, y, colsCount));
      }
    }
  }

  return neighbours;
}

export default Board;
