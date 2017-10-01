import { Directive, Input } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { Hero } from '../shared/hero';
import { DashboardComponent } from './dashboard.component';
import { AppModule } from '../app.module';
import { HeroService } from '../shared/hero.service';

@Directive({
    selector: '[routerLink]',
    host: {
        '(click)': 'onClick()'
    }
})
class RouterLinkStubDirective {
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;

    onClick() {
        this.navigatedTo = this.linkParams;
    }
}

describe('dashboard.component', () => {
    const heroes: Hero[] = [
        {
            id: 1,
            name: 'Adam'
        },
        {
            id: 2,
            name: 'Bertil'
        },
        {
            id: 3,
            name: 'Ceasar'
        },
        {
            id: 4,
            name: 'David'
        },
        {
            id: 5,
            name: 'Erik'
        },
        {
            id: 6,
            name: 'Fredrik'
        },
        {
            id: 7,
            name: 'Gustav'
        }
    ];

    describe('slice', () => {
        it('returns a section of an array, leaving the original array untouched', () => {
            const slicedArray01 = heroes.slice(0, 5); // slice index 0-4

            expect(slicedArray01.length).toEqual(5);
            expect(slicedArray01.shift().id).toEqual(1);
            expect(slicedArray01.pop().id).toEqual(5);
            expect(heroes.length).toEqual(7);
        });
    });

    describe('the component', () => {
        let fixture: ComponentFixture<DashboardComponent>;
        let instance: DashboardComponent;
        let nativeElement: HTMLElement;
        let heroService: HeroService;

        // 2) Can also use beforeEach(async(()=>{})); , when that is needed I dont know right (it is not needed for using a spy on aync function in beforeEach)
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [RouterTestingModule],
                declarations: [DashboardComponent, RouterLinkStubDirective],
                providers: [HeroService]
            })
                .compileComponents();

            fixture = TestBed.createComponent(DashboardComponent);
            instance = fixture.componentInstance;
            nativeElement = fixture.nativeElement;

            heroService = fixture.debugElement.injector.get(HeroService);
        });

        it('starts with no heroes in view model and no heroes rendered in DOM', () => {
            expect(instance.heroes).toBeFalsy();
            expect(nativeElement.getElementsByClassName('cell').length).toEqual(0);
            expect(nativeElement.innerHTML.indexOf('Bertil')).toEqual(-1);
        });

        it('does not call ngOnInit automaticly in the test', () => {
            spyOn(instance, 'ngOnInit');
            expect(instance.ngOnInit).not.toHaveBeenCalled();
        });

        // 1) We need to use fakeAsync and tick() to test async function (test needs to know to wait its assertion til after async is complete)
        it('gets heroes via service and renders them in DOM on ngOnInit', fakeAsync(() => {
            spyOn(heroService, 'getHeroes').and.callFake(() => {
                return Promise.resolve(heroes);
            });

            instance.ngOnInit();

            tick();
            fixture.detectChanges(); // detect changes in DOM (else we dont get the rendered heroes)

            expect(heroService.getHeroes).toHaveBeenCalled();
            expect(instance.heroes.length).toBeTruthy();
            expect(nativeElement.getElementsByClassName('cell').length).not.toEqual(0);
            expect(nativeElement.innerHTML.indexOf('Bertil')).not.toEqual(-1);
        }));

        describe('renders heroes as links to their detail view', () => {
            const heroes: Hero[] = [
                {
                    id: 5,
                    name: 'Henry'
                }
            ];

            it('should render links', () => {
                instance.heroes = heroes;

                fixture.detectChanges();

                const cellForTheOneHero = nativeElement.getElementsByClassName('cell')[0];
                const linkForTheOneHero = cellForTheOneHero.getElementsByClassName('my-link-text')[0];

                expect(linkForTheOneHero.getAttribute('ng-reflect-router-link')).toContain('/detail,5');
            });

            it('should navigate when user clicks on a link', () => {
                instance.heroes = heroes;

                fixture.detectChanges();

                const cellForTheOneHero = nativeElement.getElementsByClassName('cell')[0];
                const linkForTheOneHero = cellForTheOneHero.getElementsByClassName('my-link-text')[0];

                const test = document.querySelector('button');
                const testToo = document.getElementsByClassName('foo');
                //test.click

                //nativeElement.querySelector('my').click

            });

            it('should navigate when user focus a link and presses enter', () => {

            });
        })

    });
});
