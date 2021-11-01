// drag and drop interfaces
namespace App {
  export interface Draggable {
    dragStartFn(event: DragEvent): void;
    dragEndFn(event: DragEvent): void;
  }

  export interface DragTarget {
    dragOverFn(event: DragEvent): void;
    dropFn(event: DragEvent): void;
    dragLeaveFn(event: DragEvent): void;
  }
}
