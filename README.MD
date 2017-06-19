# ng4-input-counter

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

### With bootstrap

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

## Input properties

In order to make it more comfortable and compliant as a native input, the most commonly used attributes were defined as input properties.

Property | Type | Default value
------------ | ------------------------- | -------------
ngModel | any | N/A
id | string | N/A
type | string | `'text'`
className | string | N/A
name | string | N/A
placeholder | string | `''`
maxlength | number | N/A
minlength | number | N/A
pattern | string | N/A
disabled | boolean | `false`
required | boolean | `false`
readonly | boolean | `false`

You can also bind all angular input events handler, like `(focus)`, `(blur)`, `(keyup)`, `(keydown)`, etc.

> Note that for the special case `class`, we used `className` instead (like the React way), because of it being a reserved keyword in JavaScript and TypeScript.

## License

MIT © [maddeveloper](https://github.com/MadDeveloper)