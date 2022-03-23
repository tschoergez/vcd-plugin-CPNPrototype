import { Component } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { EntityActionExtensionComponent, EntityActionExtensionMenuEntry } from "@vcd/sdk/common";

@Component({
    selector: 'vm-backup-action-extension',
    templateUrl: './vm.backup.action.component.html'
})
export class VmBackupActionComponent extends EntityActionExtensionComponent {
    modalText = "";
    modalAction = "";
    opened = false;

    private result: Subject<{ refreshRequested: boolean }>;

    getMenuEntry(entityUrn: string): Observable<EntityActionExtensionMenuEntry> {
        return Observable.of({
            text: "Carbon Black",
            children: [{
                urn: "urn:vmware:vcloud:vm:cbSensor",
                text: "Sensor Kit Installation",
                busy: false,
                enabled: true
            },
            {
                urn: "urn:vmware:vcloud:vm:cbStatus",
                text: "Show Status",
                busy: false,
                enabled: true
            },
            {
                urn: "urn:vmware:vcloud:vm:cbEvents",
                text: "Show Events",
                busy: false,
                enabled: true
            },
            {
                urn: "urn:vmware:vcloud:vm:cbLive",
                text: "Open Live Response",
                busy: false,
                enabled: true
            }]
        });
    }

    performAction(menuItemUrn: string, entityUrn: string): Observable<{ refreshRequested: boolean }> {
        this.modalText = `Entity: ${entityUrn}  Action: ${menuItemUrn}`;
        this.modalAction = menuItemUrn;
        this.opened = true;
        this.result = new Subject<{ refreshRequested: boolean }>();
        return this.result.asObservable();
    }

    onClose() {
        this.opened = false;
        this.result.next({ refreshRequested: true });
        this.result.complete();
    }

}