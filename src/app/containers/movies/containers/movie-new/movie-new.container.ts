import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { ActionTypes, requestCreateMovie } from 'src/app/containers/movies/store/movies.actions';
import { Movie, MovieGenre } from 'src/app/core/models/movies.model';
import { FormUtilsService } from 'src/app/core/utils/form-utils.service';
import { Translation, TranslocoService } from '@ngneat/transloco';
import { ValidateURL } from 'src/app/core/validators/url.validator';
import { Genres, MovieFormField } from 'src/app/core/constants/movies.constants';
import { actorList } from 'tests/fixtures/actors-fixture';

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.container.html',
  styleUrls: ['./movie-new.container.scss'],
})
export class MovieNewContainer implements OnInit, OnDestroy {
  form: FormGroup;
  translations: Translation;
  genres: MovieGenre[] = Genres;
  movieFormField = MovieFormField;

  // TODO Replace it when "actors" feature is finished
  actors = [
    ...actorList.map((actor) => ({
      id: actor.id,
      fullname: `${actor.first_name} ${actor.last_name}`,
    })),
  ];

  private subscriptions: Subscription = new Subscription();

  constructor(
    private store: Store,
    private actions$: Actions,
    private fb: FormBuilder,
    private translateService: TranslocoService,
    private toastService: ToastrService,
    private formUtilsService: FormUtilsService
  ) {}

  ngOnInit() {
    this.form = this.createForm();

    this.subscriptions.add(
      this.translateService
        .selectTranslateObject('message', {}, 'movieNew')
        .subscribe((items: Translation) => {
          this.translations = items;
        })
    );

    this.subscriptions.add(
      this.actions$.pipe(ofType(ActionTypes.CREATE_MOVIE_SUCCESS)).subscribe(
        (res: { payload: Movie }) => {
          this.createMovieSuccess(res);
        },
        (err) => {
          this.toastService.error(err.message);
        }
      )
    );
  }

  createForm() {
    return this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      poster: new FormControl(null, [ValidateURL]),
      genre: new FormControl('', [Validators.required]),
      actors: new FormControl(null, Validators.required),
      year: new FormControl(null, Validators.required),
      duration: new FormControl(null, Validators.required),
      imdbRating: new FormControl(null),
    });
  }

  submitForm() {
    this.formUtilsService.markFormControlsAsDirty(this.form);

    if (this.form.valid) {
      this.store.dispatch(requestCreateMovie({ payload: this.form.value }));
    }
  }

  createMovieSuccess(res: { payload }) {
    if (!res.payload) {
      this.toastService.error(res.payload);
    } else {
      this.toastService.success(res.payload.title, this.translations.movieCreatedSuccess);
      this.form.reset();
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
