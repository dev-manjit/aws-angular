import { Component, Input,Output,EventEmitter,inject  } from '@angular/core';
import { MatDialogModule,MatDialogRef } from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'common-dialog',
  imports: [MatDialogModule], 
  templateUrl: './common-dialog.component.html',
  styleUrl: './common-dialog.component.scss'
})
export class CommonDialogComponent{
  @Input() title: string = 'Dialog Title';
  @Output() formSubmit = new EventEmitter<void>();
  dialogRef = inject(MatDialogRef<this>);
  submit() {
    this.formSubmit.emit();
  }

  close(): void {
    this.dialogRef.close();
  }
}

