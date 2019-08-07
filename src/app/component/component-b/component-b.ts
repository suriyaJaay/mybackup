import {  ChangeDetectorRef, Component, Injectable ,OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { map } from 'rxjs/operators/map';

 export class GameNode {
  children: BehaviorSubject<GameNode[]>;
  constructor(
    public item: string, children?: GameNode[], public parent?: GameNode) {
    this.children = new BehaviorSubject(children === undefined ? [] : children);
  }
}
const TREE_DATA = [
  new GameNode('Distributors Control A/c', [
    new GameNode('Genral'),
    new GameNode('Company'),
	new GameNode('Credit Limits'),
	new GameNode('Documents'),
	new GameNode('Contact Details'),
	new GameNode('Reference'),
	new GameNode('customer Site'),
	new GameNode('Terms'),
	new GameNode('Check List'),
  ]),
  new GameNode('Reports', [
    
      new GameNode(`Message`),
      new GameNode(`Ageing`),
      new GameNode(`Sales Report`),
	  new GameNode(`Sales Order Status`),
	  new GameNode(`Sales Order Analysis`),
	  new GameNode(`Sales Outstation Analysis`),
	  new GameNode(`Sample 1`),
    
    new GameNode('Sample 2'),
    new GameNode('Sample 3'),
    new GameNode('Sample 4')
  ]),
 
];
@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.html',
  styleUrls: ['./component-b.scss']
})
export class ComponentB  {

recursive: boolean = false;
  levels = new Map<GameNode, number>();
  treeControl: NestedTreeControl<GameNode>;


  dataSource: MatTreeNestedDataSource<GameNode>;

  constructor(private changeDetectorRef: ChangeDetectorRef) {

    this.treeControl = new NestedTreeControl<GameNode>(this.getChildren);
    this.dataSource = new MatTreeNestedDataSource();
    this.dataSource.data = TREE_DATA;
  }
getChildren = (node: GameNode) => {
    return node.children;
  };

  hasChildren = (index: number, node: GameNode) => {
    return node.children.value.length > 0;
  }
  ngOnInit() {
  }

}
