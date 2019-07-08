import { Component, State, h } from "@stencil/core";
import { get, set } from "../../services/storage";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  @State() testValue: string;

  async componentDidLoad() {
    this.testValue = await get("myValue");
    console.log(this.testValue);
  }

  changeValue(value) {
    this.testValue = value;
    set("myValue", this.testValue);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <h2>Current value:</h2>

        <p>{this.testValue}</p>

        <ion-item>
          <ion-label>Change value:</ion-label>
          <ion-input onInput={(ev: any) => this.changeValue(ev.target.value)} />
        </ion-item>
      </ion-content>
    ];
  }
}
