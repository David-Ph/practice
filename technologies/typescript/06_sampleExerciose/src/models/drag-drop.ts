// drag and drop interfaces

export interface Draggable {
  dragStartFn(event: DragEvent): void;
  dragEndFn(event: DragEvent): void;
}

export interface DragTarget {
  dragOverFn(event: DragEvent): void;
  dropFn(event: DragEvent): void;
  dragLeaveFn(event: DragEvent): void;
}
