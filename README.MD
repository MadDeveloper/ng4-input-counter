# ng4-input-counter

A very cool input which display characters counter and can be configured to display counter bounds.


## Normal

![](http://g.recordit.co/VtQnGdw6eX.gif)

## Maxlength

![](http://g.recordit.co/KAVkmjZBxO.gif)

## Minlength

![](http://g.recordit.co/Ww5C5R8B4Z.gif)

## Both

![](http://g.recordit.co/5XUR8OArww.gif)

## Installation

To install the library, run:

```bash
$ npm install ng4-input-counter --save
```

and then from your Angular module

```typescript
import { InputCounterModule } from 'ng4-input-counter';

@NgModule({
  ...
  imports: [
    ...
    InputCounterModule.forRoot()
  ],
  ...
})
export class AppModule { }
```

## How to use

```xml
<form>
    <input-counter 
      type="email" 
      placeholder="Email address" 
      required="true"
      [(ngModel)]="email">
    </input-counter>
</form>
```

### With Bootstrap

```xml
<div class="form-group">
    <input-counter 
      [(ngModel)]="email" 
      name="email" 
      className="form-control" 
      placeholder="Email address">
    </input-counter>
</div>
```

## API of input-counter

**`ngModel: any`**

**`id: string`**

**`type: string = 'text'`**

**`className: string`**

> `className` (like the React way) has been used instead of `class` because of it being a reserved keyword in JavaScript and TypeScript.


**`name: string`**

**`placeholder: string = ''`**

**`maxlength: number`**

**`minlength: number`**

**`pattern: string`**

**`disabled: boolean = false`**

**`required: boolean = false`**

**`readonly: boolean = false`**

You can also bind all angular input events handler, like `(focus)`, `(blur)`, `(keyup)`, `(keydown)`, etc.


## License

MIT © [maddeveloper](https://github.com/MadDeveloper)