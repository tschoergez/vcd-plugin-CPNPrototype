import { CommonModule } from "@angular/common";
import { Inject, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { VcdApiClient, VcdSdkModule } from "@vcd/sdk";
import { ExtensionNavRegistration, EXTENSION_ROUTE } from "@vcd/sdk/common";
import { PluginModule } from "@vcd/sdk/core";
import { TranslateService } from "@vcd/sdk/i18n";
import { ClarityModule } from "clarity-angular";
import { AboutComponent } from "./subnav/about.component";
import { StatusComponent } from "./subnav/status.component";
import { SubnavComponent } from "./subnav/subnav.component";
import { VmBackupActionComponent } from "./actions/vm.backup.action.component";
import { VappRestoreActionComponent } from "./actions/vapp.restore.action.component";
import { DatacenterContainerComponent } from "./datacenter-overview/datacenter.container.component";
import {
    ApplicationComponent,
    DatacenterComputeComponent,
    DatacenterNetworkComponent,
    DatacenterStorageComponent,
    VmCreateWizardExtensionPointComponent
} from ".";
import { VappCreateWizardExtensionPointComponent } from "./create-vapp";
import { ModalWizardExtensionPointService } from "./services/modal-wizard-ext-point.service";
import { OrgCreateWizardExtensionPointComponent } from "./create-org";

const ROUTES: Routes = [
    { path: "", component: SubnavComponent, children: [
        { path: "", redirectTo: "status", pathMatch: "full" },
        { path: "status", component: StatusComponent },
        { path: "about", component: AboutComponent }
    ]}
];

@NgModule({
    imports: [
        ClarityModule,
        CommonModule,
        VcdSdkModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        AboutComponent,
        DatacenterContainerComponent,
        StatusComponent,
        SubnavComponent,
        VappRestoreActionComponent,
        VmBackupActionComponent,
        ApplicationComponent,
        DatacenterComputeComponent,
        DatacenterNetworkComponent,
        DatacenterStorageComponent,
        VappCreateWizardExtensionPointComponent,
        VmCreateWizardExtensionPointComponent,
        OrgCreateWizardExtensionPointComponent,
    ],
    entryComponents: [
        DatacenterContainerComponent,
        VappRestoreActionComponent,
        VmBackupActionComponent,
        ApplicationComponent,
        DatacenterComputeComponent,
        DatacenterNetworkComponent,
        DatacenterStorageComponent,
        VappCreateWizardExtensionPointComponent,
        VmCreateWizardExtensionPointComponent,
        OrgCreateWizardExtensionPointComponent,
    ],
    bootstrap: [SubnavComponent],
    exports: [],
    providers: [VcdApiClient, ModalWizardExtensionPointService]
})
export class SubnavPluginModule extends PluginModule {
    constructor(appStore: Store<any>, @Inject(EXTENSION_ROUTE) extensionRoute: string, translate: TranslateService) {
        super(appStore, translate);
        this.registerExtension(<ExtensionNavRegistration>{
            path: extensionRoute,
            icon: "page",
            nameCode: "nav.label",
            descriptionCode: "nav.description"
        });
    }
}
