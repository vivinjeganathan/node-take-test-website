import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() selectedTab = new EventEmitter<string>()

    onSelectTab(tabName: string) {
        this.selectedTab.emit(tabName);
    }
}